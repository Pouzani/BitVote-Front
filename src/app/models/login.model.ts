


export interface LoginResponse{
  token: string;
  username: string;
  role: string;
}

export interface LoginRequest{
  username: string;
  password: string;
}
