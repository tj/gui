import AceEditor from 'react-ace'
import brace from 'brace'
import 'brace/mode/json'
import 'brace/theme/github'
import './Editor.css'

/**
 * Editor is a code editor.
 */

export default function({ id, value }) {
  return <div class="Editor">
    <AceEditor
      name={id}
      mode="json"
      theme="github"
      value={value}
      height={200}
      width={400}
      showGutter={false}
      highlightActiveLine={false}
      onChange={e => console.log(e)}
      editorProps={{ $blockScrolling: true }}
    />
  </div>
}
