import { Link } from 'react-router-dom';
import "./Header.css"

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {
    return (
        <div className="mb-10 header-back-form">
            <div className="flex justify-center">
                
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 extra-format-head">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5 extra-format-subhead">
                {paragraph} {' '}
                <Link to={linkUrl} className="transfer-link-format font-medium text-purple-600 hover:text-purple-500 extra-format-link">
                    {linkName}
                </Link>
            </p>
        </div>
    )
}