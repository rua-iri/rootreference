import React from "react";

export default function DictionaryResult(props) {

    // TODO format this text to make it easier to read

    // TODO add onclick event so that the dictionary entry can be 
    // collapsed and expanded maybe even hide some of especially long
    // entries until users click on them


    return (
        <div className="dict-result gimmie-outline">
            <div className="dict-title gimmie-outline">
                Lisan Al Arab
            </div>
            <div className="dict-entry gimmie-outline">
                {props.entryData ? props.entryData.text : ""}
            </div>
        </div>
    )
}