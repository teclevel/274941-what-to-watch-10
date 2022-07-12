export enum AppRoute {
  Main='/',
  Login='/login',
  Film='/films/:id',
  AddReview= '/films/:id/review',
  MyList='/my-list',
  Player='/player/:id',
  NotFound='*'
}

export enum AuthorizationStatus {
  Auth='AUTH',
  NoAuth='NO_AUTH',
  Unknown='UNKNOWN'
}
