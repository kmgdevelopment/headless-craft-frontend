import Link from "next/link";
import Image from "next/image";

export default function EntryListing({data, error}) {
    // if there was a GraphQL error log it and return a message to the user
    if (error) {
        console.error(error);
        return <p>There was an error fetching the entries.</p>;
    }

    // prevent an error if the component mounts before the data has loaded
    if (!data) return null;

    return (
        <div className="listing">
            { data.entries.map( (entry) => (
                <div className="item" key={entry.id}>
                  <Link href={entry.uri} className="recipe-card">
                    <div className="media">
                      <Image src={entry.image[0].url} alt={entry.title} width="500" height="250" />
                    </div>
                    <h6>{entry.title}</h6>
                  </Link>
                </div>
            )) }
        </div>
    );
}