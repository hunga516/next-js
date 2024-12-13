import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const renderContentWithHighlight = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');

    const highlightElements = (element) => { //doc.body = element
        if (element.tagName === 'H6') { //render ra code format
            return (
                <SyntaxHighlighter language="javascript" style={duotoneLight}>
                    {element.textContent}
                </SyntaxHighlighter>
            );
        }
        else if (element.tagName === 'H1' || element.tagName === 'H2') {
            return React.createElement(element.tagName.toLowerCase(), {
                className: 'text-slate-800 text-xl font-bold',
                key: element.textContent
            }, element.textContent);
        }
        else if (element.tagName === 'H4') {
            return React.createElement(element.tagName.toLowerCase(), {
                className: 'text-slate-800 underline decoration-2 decoration-pink-500', // Class tùy ý
                key: element.textContent // Đảm bảo mỗi thẻ có key duy nhất
            }, element.textContent);
        }
        else if (element.tagName === 'H5') {
            return React.createElement(element.tagName.toLowerCase(), {
                className: 'text-slate-800 underline decoration-2 decoration-sky-500', // Class tùy ý
                key: element.textContent // Đảm bảo mỗi thẻ có key duy nhất
            }, element.textContent);
        }
        else if (element.tagName === 'UL') {
            // Render thẻ ul
            return (
                <ul className="list-inside list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=)]" key={element.textContent}>
                    {Array.from(element.children).map(child => highlightElements(child))}
                </ul>
            );
        }
        else if (element.tagName === 'LI') {
            // Render thẻ li
            return (
                <li className="ml-4 text-slate-800 leading-8" key={element.textContent}>
                    {element.textContent}
                </li>
            );
        }
        else if (element.tagName === 'P') {
            // Kiểm tra nếu thẻ <p> có chứa thẻ <em> bên trong
            const hasEm = element.querySelector('em');

            if (hasEm) {
                return (
                    <p className="text-slate-800 mt-2" key={element.textContent}>
                        {Array.from(element.childNodes).map(child => {
                            if (child.tagName === 'EM') {
                                return (
                                    <span className="text-slate-800 underline decoration-pink-500 decoration-2" key={child.textContent}>
                                        {child.textContent}
                                    </span>
                                );
                            }
                            return child.textContent;
                        })}
                    </p>
                );
            }

            return React.createElement(element.tagName.toLowerCase(), {
                className: 'text-slate-800 mt-2', // Class tùy ý
                key: element.textContent
            }, element.textContent);
        }
        else if (element.children) {
            return React.createElement(element.tagName.toLowerCase(), { key: element.textContent },
                Array.from(element.children).map(child => highlightElements(child))
            );
        }
        return element.textContent;
    };

    return highlightElements(doc.body);
};