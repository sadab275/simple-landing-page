import React from 'react';

const category = ({ post }) => {
    console.log(post);
    return (
        <div>
            {post.strMeal}
        </div>
    );
};

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
    const data = await res.json();
    return {
        props: {
            post: data.meals
        }
    }
}

export default category;