import { useEffect } from 'react';
import { useHistory } from 'react-router';

function PageNotFound() {
    const history = useHistory();

    useEffect(() => {
        const redirect = setTimeout(() => history.push('/'), 2000);

        return (() => clearTimeout(redirect))
    });

    return (
        <>
            <div>
                <h1>Page Not Found</h1>
            </div>
        </>
    )
}

export default PageNotFound;
