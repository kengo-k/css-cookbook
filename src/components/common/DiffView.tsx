import * as diff from 'diff'
import { html } from 'diff2html'
import 'diff2html/bundles/css/diff2html.min.css'

const oldText = `<nav className="flex flex-row items-center justify-center text-base bg-gray-200 py-4 h-32">
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link1</a>
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link2</a>
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link3</a>
  <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link4</a>
</nav>`
const newText = `<div>
  <nav className="flex flex-row items-center justify-center text-base bg-gray-200 py-4 h-32">
    <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link1</a>
    <a className="border-2 border-gray-500 foo p-2 hover:text-gray-900">Link2</a>
    <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link3</a>
    <a className="border-2 border-gray-500 p-2 ml-5 hover:text-gray-900">Link4</a>
  </nav>
</div>`

export const DiffView = () => {
  const diffText = diff.createPatch('string', oldText, newText, '', '')
  const diffHtml = html(diffText, {
    drawFileList: false,
    outputFormat: 'side-by-side',
    matching: 'lines',
    renderNothingWhenEmpty: true,
  })

  return <div dangerouslySetInnerHTML={{ __html: diffHtml }} />
}
