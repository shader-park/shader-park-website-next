import type { NextPage } from 'next'
import SculptureCard from "../components/sculptureCard"
import firebaseApp from '../firebase/clientApp'

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
            <>
            {/* <input type="range" min="1" max="10" value="4"></input> */}
            <main className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">New Sculptures</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    { snapshots.map((v) => (
                        <SculptureCard sculpture={v.val()}/>
                    )) }
                </div>
            </main>
            </>
        )
        
    }
    return (
        <>
        {/* {error && <strong>Error: {error}</strong>} */}
        {loading && <span>List: Loading...</span>}
        {!loading && snapshots && (
        <>

        {/* <div className="flex min-h-screen flex-col items-center justify-center py-2"> */}

            {/* <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"> */}
            <main className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">New Sculptures</h2>
                { sculptures.map((sculpture) => (
                    <SculptureCard sculpture={sculpture}/>
                ))
                }
                
            </main>
            {/* </main> */}
        {/* </div> */}
        </>
        )}
        </>
    )
}

export default Explore
