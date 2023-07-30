export const MenuExampleGoal = () => {
  return (
    <div className="bg-gray-200">
      <header className="text-gray-600 body-font">
        <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">My Awesome Site</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Link1</a>
            <a className="mr-5 hover:text-gray-900">Link2</a>
            <a className="mr-5 hover:text-gray-900">Link3</a>
            <a className="mr-5 hover:text-gray-900">Link4</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Login
          </button>
        </div>
      </header>
    </div>
  )
}
