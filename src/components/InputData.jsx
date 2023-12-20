import React from "react";

const InputData = (attributes) => {
    const changeHandler = (event) => {
        if (attributes.name === "title") {
            const currentText = event.target.value;
            attributes.onChange((oldText) =>
                currentText.length <= 50 ? currentText : oldText
            );
        } else {
            attributes.onChange(event.target.value);
        }
    };

    return (
        <>
            {attributes.type === "textarea" ? (
                <textarea
                    {...attributes}
                    value={attributes.value}
                    spellCheck={false}
                    onChange={changeHandler}
                />
            ) : (
                <input
                    {...attributes}
                    value={attributes.value}
                    spellCheck={false}
                    onChange={changeHandler}
                />
            )}
        </>
    );
};

export default InputData;
