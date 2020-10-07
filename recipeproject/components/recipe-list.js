
import RecipeDetail from './recipe-detail'

export default function RecipeList({
recipes}) {
    return (
        <section>
          <h2>Recipe List</h2>
          {recipes.map(({node}) => (
            <RecipeDetail
              key={node._meta.uid}
              name={node.name}
              description={node.description}
              preparation={node.preparation}
              cooking={node.cooking}
              servings={node.servings}
              isvegetarian={node.isvegetarian}
              ingredients={node.ingredients}
              steps={node.steps}
              link={node.link}
            />
          ))}
        </section>
      )
    }