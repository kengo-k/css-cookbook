import { GetStaticPropsContext } from 'next'
import { useEffect } from 'react'

import Showcase, { Showcase2, createShowcaseItem } from '@/components/common/Showcase'
import { MenuExampleGoal } from '@/components/examples/menus'
import { andada_pro } from '@/utils/fonts'

import 'prism-themes/themes/prism-ghcolors.css'
import Prism from 'prismjs'
import 'prismjs/components/prism-css.min.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

export async function getStaticProps(context: GetStaticPropsContext) {
  const X = 5 //init('Menu Example', MenuExampleGoal, { showCode: true })
  return {
    props: { message: 'Hello, World!', X },
  }
}

const MarginExsampleGoal = createShowcaseItem({
  Component: () => {
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
  },
  code: `<div className="bg-gray-200">
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
</div>`,
  lang: 'html',
})

const MarginSample1 = createShowcaseItem({
  Component: () => {
    return <div className="bg-gray-200 p-2 my-2">Lorem ipsum</div>
  },
  code: `<div class="bg-gray-200 p-2 my-2">Lorem ipsum</div>`,
  lang: 'html',
})

const MarginSample2 = createShowcaseItem({
  Component: () => {
    return <div className="bg-gray-200 p-2 my-2 w-1/2">Lorem ipsum</div>
  },
  code: `<div class="bg-gray-200 p-2 my-2 w-1/2">Lorem ipsum</div>`,
  lang: 'html',
})

const MarginSample3 = createShowcaseItem({
  Component: () => {
    return <div className="bg-gray-200 p-2 my-2 w-1/2 mx-auto">Lorem ipsum</div>
  },
  code: `<div className="bg-gray-200 p-2 my-2 w-1/2 mx-auto">Lorem ipsum</div>`,
  lang: 'html',
})

const MarginSample4 = createShowcaseItem({
  Component: () => {
    return <div className="bg-gray-200 p-2 my-2 w-1/2 ml-auto">Lorem ipsum</div>
  },
  code: `<div className="bg-gray-200 p-2 my-2 w-1/2 ml-auto">Lorem ipsum</div>`,
  lang: 'html',
})

const FlexExample1 = createShowcaseItem({
  Component: () => {
    return (
      <nav className="text-base bg-gray-200 py-4 h-32">
        <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link1</a>
        <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link2</a>
        <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link3</a>
        <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link4</a>
      </nav>
    )
  },
  code: `<nav className="text-base bg-gray-200 py-4 h-32">
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">
    Link1
  </a>
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">
    Link2
  </a>
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">
    Link3
  </a>
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">
    Link4
  </a>
</nav>`,
  lang: 'html',
})

const FlexExample2 = createShowcaseItem({
  Component: () => {
    return (
      <nav className="flex flex-row items-center justify-center text-base bg-gray-200 py-4 h-32">
        <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link1</a>
        <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link2</a>
        <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link3</a>
        <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link4</a>
      </nav>
    )
  },
  code: `<nav className="flex flex-row items-center justify-center text-base bg-gray-200 py-4 h-32">
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">
    Link1
  </a>
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">
    Link2
  </a>
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">
    Link3
  </a>
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">
    Link4
  </a>
</nav>`,
  lang: 'html',
})

const FlexExample3 = createShowcaseItem({
  Component: () => {
    return (
      //<div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div className="flex flex-row items-center bg-gray-200">
        {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> */}
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
  },
  code: `<nav className="flex flex-row items-center justify-center text-base bg-gray-200 py-4 h-32">
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">
    Link1
  </a>
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">
    Link2
  </a>
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">
    Link3
  </a>
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">
    Link4
  </a>
</nav>`,
  lang: 'html',
})

export default function Home(props: { X: React.ReactElement }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <main className="container mx-auto">
      <Showcase2 title="NEKO" Component={MenuExampleGoal} showCode={true} />
      <h2 className={`text-4xl mt-4 ${andada_pro.className}`}>Implement Header Menu</h2>
      <p className="my-4">
        In this chapter, we will start with the minimal code and gradually flesh it out to understand how to implement
        the header menu shown below.
      </p>
      <Showcase item={MarginExsampleGoal} showCode={false} />
      <h2 className={`text-2xl my-4 ${andada_pro.className}`}>Basics of margin</h2>
      <p>As a prerequisite, you will understand how to use margin for centering and aligning to the left or right.</p>
      <section>
        <div>
          <Showcase title={'Step1: Initial div'} item={MarginSample1} showCode={true} />
          <article className="mt-6">
            This is the most basic div. A background color is set to visually understand the area occupied by the div.
            From this example, it is clear that the div occupies the full width.
          </article>
        </div>

        <div>
          <Showcase title={'Step2: Add w-1/2'} item={MarginSample2} showCode={true} />
          <article className="mt-6">By specifying w-1/2, the width of the area becomes half.</article>
        </div>

        <div>
          <Showcase title={'Step3: Align to center'} item={MarginSample3} showCode={true} />
          <article className="mt-6">By specifying mx-auto, the area occupied by the element is centered.</article>
        </div>

        <div>
          <Showcase title={'Step4: Align to left'} item={MarginSample4} showCode={true} />
          <article className="mt-6">By specifying ml-auto, the area occupied by the element is right-aligned.</article>
        </div>
      </section>
      <h2 className={`text-2xl mt-4 ${andada_pro.className}`}>Basics of Flex layout</h2>
      <p className="my-4">By using flex, you can allocate elements within a block at equal intervals.</p>
      <section>
        <div>
          <Showcase title={'Step1: Initial menu items'} item={FlexExample1} showCode={true} />
          <article className="mt-6">
            This is the layout before applying flex. The link elements are aligned to the left within the block.
          </article>
        </div>
      </section>
      <section>
        <div>
          <Showcase title={'Step2: Apply flex layout'} item={FlexExample2} showCode={true} />
          <article className="mt-6">
            Added the classes `flex`, `flex-row`, `items-center` and `justify-center` to the nav element. The meanings
            of each class are as follows:
            <ul className="list-disc list-inside p-4">
              <li>`flex`: Makes the specified element a Flex container.</li>
              <li>`flex-row`: Arranges the children of the Flex container in a horizontal direction.</li>
              <li>
                `justify-center`: Centers the children along the main axis. In this case, as we have set the direction
                as row using "flex-row", this main axis is the horizontal axis.
              </li>
              <li>`items-center`: Centers the children along the cross axis. In this case, it's the vertical axis.</li>
            </ul>
          </article>
        </div>
      </section>
      <section>
        <div>
          <Showcase title={'Step3: Align the navigation links to the right'} item={FlexExample3} showCode={true} />
          <article className="mt-6">todo</article>
        </div>
      </section>
    </main>
  )
}
