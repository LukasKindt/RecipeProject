import Head from 'next/head'
import RecipeList from '../components/recipe-list'
import { getAllRecipes } from '../lib/api'

export default function Index({allNewrecipes}) {
  return (
      <>
        <title>Recipes</title>
        {allNewrecipes.length > 0 && <RecipeList recipes={allNewrecipes}/>}
      </>
  )
}

export async function getStaticProps({preview = false, previewData}){
  const allNewrecipes = await getAllRecipes(previewData)
  return {
    props: {preview, allNewrecipes},
  }
}