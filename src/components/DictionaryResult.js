import React from "react";

export default function DictionaryResult(props) {

    const [isExpanded, setIsExpanded] = React.useState(false);

    // TODO format this text to make it easier to read


    function expandMenu() {
        setIsExpanded(!isExpanded);
    }


    return (
        <div className="dict-result gimmie-outline">
            <div className="dict-title gimmie-outline" onClick={expandMenu}>
                Lisan Al Arab
            </div>
            <div className="dict-entry gimmie-outline"
                style={{maxHeight: isExpanded ? 'none' : '10vh' }}>
                {props.entryData ? props.entryData.text : ""}
            </div>
        </div>
    )
}