import type { NextPage } from 'next'
import { Sandpack } from "@codesandbox/sandpack-react";
import { minimalRendererIndexHTML, shaderParkStartCode, minimalRendererCSS } from '../components/spStarterTempaltes';

const Explore: NextPage = () => {
    return (
        <Sandpack
        template="static"
        files={{
            "/index.html": minimalRendererIndexHTML,
            "/spCode.txt": shaderParkStartCode,   
            "/styles.css" : minimalRendererCSS
        }}
        options={{
            // visibleFiles: ["/spCode.js", "/index.html", "/style.css"],
            visibleFiles: ["/spCode.txt"],
            initMode: "immediate",
            activeFile: "/spCode.txt",
            showLineNumbers: true, // default - true
            showInlineErrors: true, // default - false
            recompileMode: 'immediate',
            // recompileDelay: 300,
            // wrapContent: true, // default - false
            editorHeight: 800, // default - 300
            editorWidthPercentage: 50, // default - 50
        }}
        />
    )
}

export default Explore
