import React from 'react';
import Items from './items';
 
const TODOS = [
	{'name': '오늘의 할일'},
	{'name': '내일의 할일'},
	{'name': '그 다음 할일'}
]

class App extends React.Component {
    render(){
        return (
        	<div>
				<Items.TodoTable todos={TODOS} />
			</div>
        )
    }
}
 
export default App;
