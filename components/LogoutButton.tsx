export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <button className=" text-sm py-1.5 text-white font-semibold px-4 rounded-md bg-red-500">
        Logout
      </button>
    </form>
  )
}
