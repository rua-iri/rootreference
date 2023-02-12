import React from "react";

export default function DictionaryResult(props) {

    const [isExpanded, setIsExpanded] = React.useState(false);

    // TODO format this text to make it easier to read


    function expandMenu() {
        setIsExpanded(!isExpanded);
    }

    let entryText = "";


    // TODO better error handling for cases where one or more dictionaries do not return results


    // format the entries correctly for Hans Wehr and Lane's Lexicon
    if (props.entryData) {
        if (props.dictTitle === "Hans Wehr" || props.dictTitle === "Lane's Lexicon") {

            if (JSON.stringify(props.entryData) !== "{}") {
                entryText = props.entryData.map((entry, key) => (
                    <div key={key} className="separate-entry gimmie-outline">
                        <strong>{entry.word}</strong>
                        <br />
                        <span dangerouslySetInnerHTML={{__html: `${entry.defintion}`}} />
                    </div>
                ))
            }

        } else if (props.dictTitle === "Lisan AlArab") {
            entryText = props.entryData.text;
        }
    }

    return (
        <div className="dict-result gimmie-outline" onClick={expandMenu}>
            <div className="dict-title gimmie-outline">
                {props.dictTitle}
            </div>
            <div className="dict-entry gimmie-outline arab-text"
                style={{ maxHeight: isExpanded ? 'none' : '13vh' }}>

                {entryText}

            </div>
        </div>
    )
}