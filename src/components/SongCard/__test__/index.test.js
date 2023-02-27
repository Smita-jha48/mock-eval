import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import heartGrey from '../../../assets/Image/heart-gray.svg'

import SongCard from '..';

describe('song card', ()=>{
    const mockProps = {
        id:1, 
        index:1, 
        countLike:{
        "count": 1,
        "like": false
        }, 
        data:{
                "id": "cd3cc1e3-e1e0-4ccd-bc67-747648985838",
                "name": "Lost",
                "imageUrl": "https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631",
                "artist": {
                    "id": "496b0a85-2bfa-45bc-8d0f-57fe0ce55708",
                    "name": "Maroon 5"
                },
                "genre": {
                    "id": "128aa7f8-c943-48ce-b352-7edd26fa4c6e",
                    "name": "Pop"
                }
            }, 
        handleLike:jest.fn(), 
      };
      it('should render correctly', () => {
        const { asFragment } = render(<SongCard {...mockProps} />);
        expect(asFragment()).toMatchSnapshot();
      });
      it('should render with heart image', () => {
        const { getByAltText } = render(<SongCard {...mockProps} />);
        const imgElement = getByAltText('heart');
        expect(imgElement.getAttribute('src')).toBe(heartGrey);
      });
      it('should render with heart count', () => {
        const { getByText } = render(<SongCard {...mockProps} />);
        const heartCountElement = getByText(mockProps.countLike.count);
        expect(heartCountElement).toBeTruthy();
      });
      it('handleLike should be called on click', async () => {
        const { getByAltText } = render(<SongCard {...mockProps} />);
        const imgElement = getByAltText('heart');
        fireEvent.click(imgElement);
        waitFor(() => {
          expect(mockProps.handleLike).toHaveBeenCalled();
        });
      });
})