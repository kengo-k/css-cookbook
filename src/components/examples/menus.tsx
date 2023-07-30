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

export const Margin1 = () => {
  return <div className="bg-gray-200 p-2 my-2">Lorem ipsum</div>
}

export const Margin2 = () => {
  return <div className="bg-gray-200 p-2 my-2 w-1/2">Lorem ipsum</div>
}

export const Margin3 = () => {
  return <div className="bg-gray-200 p-2 my-2 w-1/2 mx-auto">Lorem ipsum</div>
}

export const Margin4 = () => {
  return <div className="bg-gray-200 p-2 my-2 w-1/2 ml-auto">Lorem ipsum</div>
}

export const Flex1 = () => {
  return (
    <nav className="text-base bg-gray-200 py-4 h-32">
      <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link1</a>
      <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link2</a>
      <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link3</a>
      <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link4</a>
    </nav>
  )
}

export const Flex2 = () => {
  return (
    <nav className="flex flex-row items-center justify-center text-base bg-gray-200 py-4 h-32">
      <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link1</a>
      <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link2</a>
      <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link3</a>
      <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link4</a>
    </nav>
  )
}

export const Flex3 = () => {
  return (
    <div className="flex flex-row items-center bg-gray-200">
      <a>
        <span className="ml-3 text-xl">My Awesome Site</span>
      </a>
      <nav className="flex flex-row items-center justify-center text-base py-4 h-32 ml-auto">
        <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link1</a>
        <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link2</a>
        <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link3</a>
        <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link4</a>
      </nav>
    </div>
  )
}
