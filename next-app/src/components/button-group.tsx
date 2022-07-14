export default function ButtonGroup(props) {
    const { options, value, valueHandler, className, optionStyle } = props;

    const renderOptions = (children) => {
        return children.map((child, index) => {
            let additionalClasses = index == 0
                ? 'rounded-l'
                : index == children.length - 1
                    ? 'rounded-r'
                    : '';

            return <button type="button" onClick={() => setGroupValue(child.value)} className={"inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out" + " " + additionalClasses + " " + optionStyle}>{child.title}</button>;
        })
    };

    const setGroupValue = (optionValue) => {
        valueHandler(optionValue);
    };

    return (
        <div className={"flex items-center justify-center" + " " + className}>
            <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                {renderOptions(options)}
            </div>
        </div>
    );
}