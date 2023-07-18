import type { NextPage } from 'next'
import SculptureCard from "../components/sculptureCard"
import firebaseApp from '../firebase/clientApp'
import { Sandpack } from "@codesandbox/sandpack-react";
import { minimalRendererIndexHTML, shaderParkStartCode, minimalRendererCSS } from '../components/spStarterTempaltes';

import { ref, getDatabase, query, orderByChild } from 'firebase/database';
import { useList } from 'react-firebase-hooks/database';

const database = getDatabase(firebaseApp);

const Explore: NextPage = () => {
    
    var dbRef = ref(database, 'sculptures')
    // const dbQuery = dbRef.orderBy("timestamp");
    const mostViewedPosts = query(dbRef, orderByChild('favorites'));


    // let [snapshots, loading, error] = useList(ref(database, 'sculptures'));
    let [snapshots, loading, error] = useList(mostViewedPosts);
    if(!loading && snapshots) {

        snapshots = snapshots?.reverse().slice(0, 100);
        console.log(snapshots[0].val())
        return (
            // <Sandpack />
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
        
    } else {
        return (
            <span>List: Loading...</span>
        )
    }

}

export default Explore
