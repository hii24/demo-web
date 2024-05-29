export interface subscriptionResponse {
  success: boolean,
  subscription: {
    status: boolean,
    started_at: number,
    expires_at: number
  }
}
