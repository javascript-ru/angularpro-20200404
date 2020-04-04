# Di

useExisting

UserService / AdminService

p: [
 // AdminService,
  {provider: UserService, useExisting: AdminService}
]

constructor(s: UserService){
  // s.removeAll()
}


How To Inject?

@Decorator