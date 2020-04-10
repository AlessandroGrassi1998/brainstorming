import React from 'react';
import { Box } from '@material-ui/core';
import MaterialTable from 'material-table'

import StarRating from '../StarsRating'

const PreviousSessionsTab = () => {
    return ( 
        <Box>
            <MaterialTable
                title="Previous sessions"
                columns={[
                    { title: 'Topic', field: 'topic' },
                    { title: 'Date', field: 'date', type:"date" },
                    { title: 'Idea generated', field: 'nIdeas', type: 'numeric' },
                    { title: 'Rating', field: 'rating', render: rowData => <StarRating rating={rowData.rating}/>},
                ]}
                data={[
                    { topic: 'Space shuttle', date: '22/01/2019', nIdeas: 27, rating: 4.0 },
                    { topic: 'Landing platform', date: '13/06/2018', nIdeas: 47, rating: 4.5 },
                    { topic: 'Landing platform', date: '13/06/2018', nIdeas: 47, rating: 5.0 },
                    { topic: 'Landing platform', date: '13/06/2018', nIdeas: 47, rating: 2.5 },
                    { topic: 'Landing platform', date: '13/06/2018', nIdeas: 47, rating: 3.0 },
                    { topic: 'Landing platform', date: '13/06/2018', nIdeas: 47, rating: 4.5 },
                    { topic: 'Landing platform', date: '13/06/2018', nIdeas: 47, rating: 1.5 },
                    { topic: 'Landing platform', date: '13/06/2018', nIdeas: 47, rating: 3.5 },
                ]}
                options={{
                    sorting: true
                }}
            />
        </Box>
     );
}
 
export default PreviousSessionsTab;