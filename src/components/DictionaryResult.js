import React from "react";

export default function DictionaryResult(props) {

    const [isExpanded, setIsExpanded] = React.useState(false);

    // TODO format this text to make it easier to read


    function expandMenu() {
        setIsExpanded(!isExpanded);
    }

    let entryText = "";


    // TODO better error handling for cases where one or more dictionaries do not return results

    // TODO sort the results for hans and lane alphabetically

    // TODO the first entry from lane's lexicon appears to only contain the root itself
    // it might be desirable to remove this result


    // format the entries correctly for Hans Wehr and Lane's Lexicon
    if (props.entryData) {
        if (props.entryType === "1") {

            if (JSON.stringify(props.entryData) !== "{}") {

                entryText = props.entryData.map((entry, key) => (

                    <div key={key} className="separate-entry">
                        <div className="entry-word">{entry.word}</div>

                        <div className="entry-def" dangerouslySetInnerHTML={{ __html: `${entry.defintion}` }} />
                    </div>

                ))
            }

        } else if (props.entryType === "0") {

            // split the text onto a new line after every full stop
            entryText = props.entryData.text.split(".").map((text, key) => (
                <div key={key}>
                    {text}.
                </div>
            ));
        }
    }

    return (
        <div className="dict-result">
            <div className="dict-title" onClick={expandMenu}>
                {props.dictTitle} {isExpanded ? "-" : "+"}
            </div>
            <div className="dict-entry arab-text"
                style={{ maxHeight: isExpanded ? 'none' : '13vh' }}>

                {entryText}

            </div>
        </div>
    )
}