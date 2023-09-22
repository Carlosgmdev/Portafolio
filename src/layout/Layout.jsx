const Layout = ({children}) => {
  return (
    <div
        className="
            flex
            flex-col
            items-center
            p-4
            bg-slate-50
            text-slate-700
            dark:bg-slate-900
            dark:text-slate-200
        "
    >
        {children}
    </div>
  )
}

export default Layout