const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <h1>Profile Header</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default ProfileLayout