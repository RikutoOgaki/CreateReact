function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child =>
                typeof child === "object"
                    ? child
                    : createTextElement(child)
            ),
        },
    }
}

function createTextElemetn(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodevalue: text,
            children: [],
        },
    }
}

function render(element, container) {
    //TODO create dom nodes
}

const Didact = {
    createElement,
    render,
}

/**@jsx Didact.createElement */
const element = (
    <div id="foo">
        <a>bar</a>
        <b />
    </div>
)

const container = document.getElementById("root")
Didact.render(element, container)