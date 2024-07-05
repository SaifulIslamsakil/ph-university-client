import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import authReduces from "./feature/auth/authSlice"
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';


const persistConfig = {
    key: "root",
    storage
}
const persistedReducer = persistReducer(persistConfig, authReduces)
export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistedReducer

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions:[FLUSH, REGISTER, PURGE, PERSIST, PAUSE, REHYDRATE ]
            }
        }).concat(baseApi.middleware)

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)