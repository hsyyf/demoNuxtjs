export default function ({route, store, redirect}) {

  let token = store.state.token

  if (route.path !== "/loginPage" && !token) {
    return redirect('/loginPage')
  }
  if (route.path === "/loginPage" && token) {
    return redirect("/")
  }

}
