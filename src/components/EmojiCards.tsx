import { useEffect, useReducer, useCallback } from 'react';
import { IEmoji } from '../interfaces/IEmoji';
import { Card } from './Card';
import { Intersection } from './Intersection';

interface IEmojiCardProps {
	emojis: IEmoji[];
}

type State = {
  totalEmojis: IEmoji[];
  emojis: IEmoji[];
  emojisLength: number;
}

type Action =
 | { type: 'LOAD_MORE' }
 | { type: 'SEARCH', search: string };

const emojiReducer = (state: State, action: Action): State => {
  const { type } = action;
  const { emojisLength, totalEmojis } = state;

  switch(type) {
    case 'LOAD_MORE': {
      const newLength = emojisLength + 40;
      return {
        ...state,
        emojis: totalEmojis.slice(0, newLength),
        emojisLength: newLength
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}

export const EmojiCards = ({ emojis }: IEmojiCardProps) => {
  
  const initialState = {
    totalEmojis: emojis,
    emojis: [] as IEmoji[],
    emojisLength: 0
  }

  const [state, dispatch] = useReducer(emojiReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOAD_MORE' });
  }, []);

  const loadMore = useCallback(() => {
    dispatch({ type: 'LOAD_MORE' });
  }, []);
  
	return (
		<>
			{state.emojis.map((e) => (
				<Card code={e.code} img={e.img} key={e.code} />
			))}
      <Intersection onVisible={() => loadMore()} />
		</>
	);
};
