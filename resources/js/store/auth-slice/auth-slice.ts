import { createSlice } from '@reduxjs/toolkit';
import { checkAuthAction } from './auth-api-actions';
import { AuthorizationStatus, SliceName } from '../../const';

export type AuthSlice = {
  authStatus: AuthorizationStatus;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
}

const initialState: AuthSlice = {
  authStatus: AuthorizationStatus.Unknown,
  user: null,
};

export const authSlice = createSlice({
  name: SliceName.Auth,
  initialState,
  reducers: {
    setUsersAvatarAction: (state, action) => {
      const user = state.user;
      if (user) {
        user.avatar = action.payload.avatar;
        user.avatarThumb = action.payload.avatarThumb;
      }
      state.user = user;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const { setUsersAvatarAction } = authSlice.actions;
