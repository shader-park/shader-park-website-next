import { HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import Link from "next/link";

export default function SculptureCard(props: any) {
    const sculpture = props.sculpture;
    console.log('sculp', sculpture);
    return (
        <>
        {/* {products.map((product) => ( */}
            <div key={sculpture.id} className="group relative">
            <Link href={'/sculpture/'+sculpture.id}>
            <div className="w-full min-h-80 bg-transparent aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                
                <img
                src={sculpture.thumbnail}
                alt={sculpture.imageAlt}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
                
            </div>
            </Link>
            <div className="mt-4 flex justify-between">
                <div>
                <Link href={'/sculpture/'+sculpture.id}>
                <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {sculpture.title}
                </h3>
                </Link>
                <p className="mt-1 text-sm text-gray-500">{sculpture.username}</p>
                </div>
                <div className="flex">
                    { sculpture.favorited? <HeartIconSolid className="h-6 w-6 inline mr-1" ></HeartIconSolid> : 
                        <HeartIcon className="h-6 w-6 inline mr-1" ></HeartIcon>
                    }
                    
                    <p className="text-sm font-medium text-gray-900">{sculpture.favorites}</p>
                </div>
            </div>
            </div>
        {/* ))} */}
        </>
    )
}