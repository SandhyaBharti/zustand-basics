import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePosts = create(persist(
    (set, get) => ({
        posts: [],
        createPost: async (title, description) => {
            const userId = useUser.getState().user.id      //getState: when u r trying to get access from other state(means another store), user is an object and inside user there is an id 
            const newPost = {
                id: Date.now(),      // to generate unique value for id 
                userId,
                title,
                description
            }
            set(state => ({ posts: [newPost, ...state.posts] }))
        }
    }),
    {
        name: "post-storage"
    }
));

export const useCount = create((set, get) => (
    {
        count: 0,
        increment: (value = 1) => set((state) => ({ count: state.count + value })),
        decrement: (value = 1) => set((state) => ({ count: state.count - value })),
        reset: () => set({ count: 0 }),
        isEven: () => {
            // const count = get().count;
            const { count } = get();
            if (count % 2 === 0) return true;
            return false;
        }
    }
));

export const useUser = create((set, get) => (
    {
        user: { id: 1, name: "Sandhya", email: "sandhya@gmail.com" },
        loading: false,
        fetchUser: async () => {
            set({ loading: true })
            const res = await fetch("");
            const user = await res.json();
            set({ user: user.data, loading: false })
        }
    }
))
