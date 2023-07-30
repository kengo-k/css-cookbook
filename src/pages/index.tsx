import { GetStaticPropsContext } from 'next'
import { useEffect } from 'react'

import { Showcase2 } from '@/components/common/Showcase'
import { Flex1, Flex2, Flex3, Margin1, Margin2, Margin3, Margin4, MenuExampleGoal } from '@/components/examples/menus'
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

export default function Home(props: { X: React.ReactElement }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <main className="container mx-auto">
      <h2 className={`text-4xl mt-4 ${andada_pro.className}`}>Implement Header Menu</h2>
      <p className="my-4">
        In this chapter, we will start with the minimal code and gradually flesh it out to understand how to implement
        the header menu shown below.
      </p>
      <Showcase2 title="NEKO" Component={MenuExampleGoal} showCode={true} />
      <h2 className={`text-2xl my-4 ${andada_pro.className}`}>Basics of margin</h2>
      <p>As a prerequisite, you will understand how to use margin for centering and aligning to the left or right.</p>
      <section>
        <div>
          <Showcase2 title={'Step1: Initial div'} Component={Margin1} showCode={true}>
            This is the most basic div. A background color is set to visually understand the area occupied by the div.
            From this example, it is clear that the div occupies the full width.
          </Showcase2>
          <article className="mt-6"></article>
        </div>

        <div>
          <Showcase2 title={'Step2: Add w-1/2'} Component={Margin2} showCode={true}>
            By specifying w-1/2, the width of the area becomes half.
          </Showcase2>
        </div>

        <div>
          <Showcase2 title={'Step3: Align to center'} Component={Margin3} showCode={true}>
            By specifying mx-auto, the area occupied by the element is centered.
          </Showcase2>
        </div>

        <div>
          <Showcase2 title={'Step4: Align to left'} Component={Margin4} showCode={true}>
            By specifying ml-auto, the area occupied by the element is right-aligned.
          </Showcase2>
        </div>
      </section>
      <h2 className={`text-2xl mt-4 ${andada_pro.className}`}>Basics of Flex layout</h2>
      <p className="my-4">By using flex, you can allocate elements within a block at equal intervals.</p>
      <section>
        <div>
          <Showcase2 title={'Step1: Initial menu items'} Component={Flex1} showCode={true}>
            This is the layout before applying flex. The link elements are aligned to the left within the block.
          </Showcase2>
        </div>
      </section>
      <section>
        <div>
          <Showcase2 title={'Step2: Apply flex layout'} Component={Flex2} showCode={true}>
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
          </Showcase2>
        </div>
      </section>
      <section>
        <div>
          <Showcase2 title={'Step3: Align the navigation links to the right'} Component={Flex3} showCode={true}>
            todo
          </Showcase2>
        </div>
      </section>
    </main>
  )
}
