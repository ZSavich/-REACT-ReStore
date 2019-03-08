import React from 'react';
import { BookstoreServiceConsumer }from '../bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return(
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => (
                        <Wrapped {...props} {...bookstoreService} />
                    )
                }
            </BookstoreServiceConsumer>
        )
    }
}

export default withBookstoreService;
