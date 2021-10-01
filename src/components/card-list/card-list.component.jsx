import { Card } from '../card/card.component'
import './card-list.styles.css';

export const CardList = ({monsters}) => {
    return (
        <div className='card-list'>
            {monsters.map( m => <Card key={m.id} monster={m} />)}
        </div>
    )
}
