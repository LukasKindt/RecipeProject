import { RichText } from 'prismic-reactjs'
export default function RecipeDetail({
    name, description, preparation, cooking, servings, ingredients, steps, isvegetarian, link
}){
    const ingredientsArray = [];
    ingredients.forEach(ingredient => {
        ingredientsArray.push(<li>{ingredient.ingredient[0].text}</li>)
    })

    const stepsArray = [];
    let stepNumber = 0;
    steps.forEach(step => {
        stepNumber++;
    stepsArray.push(<><h4>Step {stepNumber}</h4><p>{step.step[0].text}</p></>)
    })
    return(
        <section>
            <RichText render={name} />
            {isvegetarian && <p>is vegetarian</p>}
            <RichText render={description} />
            <p>Preparation: {preparation}</p>
            <p>Cooking: {cooking}</p>
            <p>Total: {preparation + cooking}</p>
            <p>Servings: {servings}</p>
            <ul>
                {ingredientsArray}
            </ul>
            <section>
                {stepsArray}
            </section>
            <a href={link}><p>{link}</p></a>
        </section>
    )
}