import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { VscClose } from 'react-icons/vsc';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { FaRegComments } from 'react-icons/fa';

import { database } from '../../firebase';

function Comment(props) {
  const { idMovie, genre } = props;
  const [content, setContent] = useState('');
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [idComment, setIdComment] = useState('');
  const id = uuidv4();
  const userId = JSON.parse(localStorage.getItem('accessToken'));
  const username = JSON.parse(localStorage.getItem('username'));
  const currentDate = new Date();
  const timestamp = currentDate.getTime();
  const CommentRef = database.ref(`comments/${genre}/${idMovie}`);

  useEffect(() => {
    const getComments = async () => {
      const cmtArr = [];
      await CommentRef.once('value').then((snapshot) => {
        snapshot.forEach((snap) => {
          const childData = snap.val();
          cmtArr.push(childData);
        });
      });
      setComments(cmtArr.reverse());
    };
    getComments();
  }, [refresh]);

  const handleAddComment = async () => {
    if (!userId) {
      toast.warning('Bạn cần phải đăng nhập trước khi bình luận !', {
        autoClose: 2000,
      });
      setContent('');
      return;
    }

    if (content.trim() === '') {
      return;
    }
    await CommentRef.push().set({
      id: id,
      userID: userId,
      userName: username,
      content: content,
      createdAt: timestamp,
    });
    setContent('');
    setRefresh(!refresh);
  };

  const handleRemoveComment = async (id) => {
    await CommentRef.once('value').then((snapshot) => {
      snapshot.forEach((snap) => {
        const childKey = snap.key;
        const childData = snap.val();
        if (childData.id === id) {
          const test = CommentRef.child(childKey);
          test.remove().then(() => setRefresh(!refresh));
        }
      });
    });
  };

  const handleGetComment = async (id) => {
    await CommentRef.once('value').then((snapshot) => {
      snapshot.forEach((snap) => {
        const childData = snap.val();
        if (childData.id === id) {
          setContent(childData.content);
          setIdComment(childData.id);
        }
      });
    });
  };

  const handleUpdateComment = async (id) => {
    await CommentRef.once('value').then((snapshot) => {
      snapshot.forEach((snap) => {
        const childKey = snap.key;
        const childData = snap.val();
        if (childData.id === id) {
          const UpdateRef = CommentRef.child(childKey);
          if (content.trim() !== '') {
            UpdateRef.update({
              ...props,
              createdAt: timestamp,
              content: content,
            }).then(() => {
              setRefresh(!refresh);
              setIdComment('');
              setContent('');
            });
          }
        }
      });
    });
  };

  const handleCancelUpdate = () => {
    setIdComment('');
    setContent('');
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const days = date.getDate().toString().padStart(2, '0');
    const months = (date.getMonth() + 1).toString().padStart(2, '0');
    const years = date.getFullYear().toString().padStart(2, '0');
    return hours + ':' + minutes + ':' + seconds + ' ' + days + '/' + months + '/' + years;
  };

  return (
    <section className="w-[40%]">
      <span className="flex justify-center items-center text-3xl gap-4 mb-6 pt-2 text-zinc-500 border-t border-t-[#a69c9c]">
        <FaRegComments className="text-4xl" />
        <h3>Bình luận phim</h3>
      </span>
      <div className="mb-10">
        <textarea
          className="text-black w-full outline p-2 rounded-md"
          name=""
          id=""
          rows="2"
          placeholder="Nhập bình luận ..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        {idComment ? (
          <div className="flex gap-2 float-right">
            <button
              onClick={handleCancelUpdate}
              className="border px-2 hover:bg-white hover:text-red-600"
            >
              Huỷ
            </button>
            <button
              onClick={() => handleUpdateComment(idComment)}
              className="border px-2 hover:bg-white hover:text-red-600"
            >
              Sửa
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddComment}
            className="block border px-2 float-right hover:bg-white hover:text-red-600"
          >
            Thêm
          </button>
        )}
      </div>
      {comments
        ? comments.map((item, index) => (
            <div className="mt-4 text-sm" key={index}>
              <div className="flex items-center gap-4 mb-2">
                <h3 className="text-lg mt- text-cyan-600">{item.userName}</h3>
                <p className="text-stone-500 grow ">{formatDate(item.createdAt)}</p>
                {item.userID === userId ? (
                  <>
                    <p
                      onClick={() => handleGetComment(item.id)}
                      className="cursor-pointer hover:text-cyan-600"
                    >
                      Sửa
                    </p>
                    <VscClose
                      onClick={() => handleRemoveComment(item.id)}
                      className="cursor-pointer text-xl text-white hover:text-cyan-600"
                    />
                  </>
                ) : null}
              </div>
              <p className="-mt-2 leading-5">{item.content}</p>
            </div>
          ))
        : null}
    </section>
  );
}

Comment.propTypes = {
  idMovie: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Comment;
