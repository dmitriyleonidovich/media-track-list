import { VideoTrackList } from '.';
import { VideoTrack } from '../VideoTrack';

describe(VideoTrackList, () => {
    it('trigger "change" when "selectedchange" is fired on a track', function () {
        const track = new VideoTrack({});
        const videoTrackList = new VideoTrackList([track]);
        let changes = 0;

        const changeHandler = () => changes++;
        videoTrackList.addEventListener('change', changeHandler);

        track.onselectedchange?.();
        expect(changes).toEqual(1);

        videoTrackList.removeEventListener('change', changeHandler);
        videoTrackList.onchange = changeHandler;

        track.onselectedchange?.();
        expect(changes).toEqual(2);

        videoTrackList.removeTrack(track);
        videoTrackList.onchange = null;
    });
});

/*

it('only one track is ever selected', function(assert) {
  const track = new VideoTrack({selected: true});
  const track2 = new VideoTrack({selected: true});
  const track3 = new VideoTrack({selected: true});
  const track4 = new VideoTrack();
  const list = new VideoTrackList([track, track2]);

  assert.equal(track.selected, false, 'track is unselected');
  assert.equal(track2.selected, true, 'track2 is selected');

  track.selected = true;
  assert.equal(track.selected, true, 'track is selected');
  assert.equal(track2.selected, false, 'track2 is unselected');

  list.addTrack(track3);
  assert.equal(track.selected, false, 'track is unselected');
  assert.equal(track2.selected, false, 'track2 is unselected');
  assert.equal(track3.selected, true, 'track3 is selected');

  track2.selected = true;
  assert.equal(track.selected, false, 'track is unselected');
  assert.equal(track2.selected, true, 'track2 is selected');
  assert.equal(track3.selected, false, 'track3 is unselected');

  list.addTrack(track4);
  assert.equal(track.selected, false, 'track is unselected');
  assert.equal(track2.selected, true, 'track2 is selected');
  assert.equal(track3.selected, false, 'track3 is unselected');
  assert.equal(track4.selected, false, 'track4 is unselected');

  list.removeTrack(track);
  list.removeTrack(track2);
  list.removeTrack(track3);
  list.removeTrack(track4);
});

it('all tracks can be unselected', function(assert) {
  const track = new VideoTrack();
  const track2 = new VideoTrack();
  const list = new VideoTrackList([track, track2]);

  assert.equal(track.selected, false, 'track is unselected');
  assert.equal(track2.selected, false, 'track2 is unselected');

  track.selected = true;
  assert.equal(track.selected, true, 'track is selected');
  assert.equal(track2.selected, false, 'track2 is unselected');

  track.selected = false;
  assert.equal(track.selected, false, 'track is unselected');
  assert.equal(track2.selected, false, 'track2 is unselected');

  list.removeTrack(track);
  list.removeTrack(track2);
});

it('trigger a change event per selected change', function(assert) {
  const track = new VideoTrack({selected: true});
  const track2 = new VideoTrack({selected: true});
  const track3 = new VideoTrack({selected: true});
  const track4 = new VideoTrack();
  const list = new VideoTrackList([track, track2]);
  let change = 0;

  list.on('change', () => change++);
  track.selected = true;
  assert.equal(change, 1, 'one change triggered');

  list.addTrack(track3);
  assert.equal(change, 2, 'another change triggered by adding an selected track');

  track.selected = true;
  assert.equal(change, 3, 'another change trigger by changing selected');

  track.selected = false;
  assert.equal(change, 4, 'another change trigger by changing selected');

  list.addTrack(track4);
  assert.equal(change, 4, 'no change triggered by adding a unselected track');

  list.removeTrack(track);
  list.removeTrack(track2);
  list.removeTrack(track3);
  list.removeTrack(track4);
  list.off('change');
});

*/
