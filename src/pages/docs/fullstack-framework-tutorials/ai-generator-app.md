# Build a generative AI SaaS with OpenAI, Vercel, Stripe, and Tier

With the advent of OpenAI and GPT-4, it's now easier than ever to build your own SaaS that generates content - whether that's marketing copy, tweets, or anything else.

But although **generating** content is easy, productionizing your SaaS app can still be a pain.

This tutorial will guide you through building an end-to-end SaaS, including a full-stack web application with integrated payments and an easy-to-adapt template. You'll use online platforms Vercel and Stripe to do the heavy lifting so you can focus on building the unique parts of your own SaaS.

At the end of the guide, you’ll have a ready-to-go SaaS application that generates marketing copy for your customers, complete with customizable subscription plans.

![Your running application 2](/images/tutorials/ai-generator-app/im5.png)

We'll cover all the steps required to set up the most important pieces of the app at a high level and where appropriate link to the relevant docs for each of the components. We'll also show you how to change the pricing, content, frontend, and anything else you like to make the application your own.

<Banner>
  What is Tier? Tier is Terraform for pricing models. We let you build advanced
  pricing models, metering, and subscription management in a few lines of
  configuration.
</Banner>

## Setting up the template

The basic starter version of this template is [on GitHub](https://github.com/tierrun/tier-vercel-openai) and has all the necessary ingredients for your SaaS app: It uses Tier, OpenAI, Next.js (full stack JavaScript), Vercel (for hosting and database), and Stripe.

The advantage of a stack like this is that it covers all the tech fundamentals you need to build and scale a SaaS business, the services it uses offer generous free tiers, and you can deploy your app without having to consult a DevOps engineer.

Tier adds a layer on top of Stripe so that you can feature gate subscriptions and offer grandfather plans. OpenAI is the most advanced AI-based API provider in the world and their flagship ChatGPT is being used by students everywhere to cheat on their homework. Next.js and Vercel work together to provide the most seamless full-stack web application experience with a huge ecosystem of connectors, libraries, and packages for virtually any use case. Finally, Vercel Postgres is a relatively new service, but it's underpinned by the same Vercel serverless principles, allowing you to scale your SQL database without having to manage infrastructure.

Here are the basic steps to get started with the repository:

1. Install Git if not already installed.
2. Open a terminal or command prompt.
3. Navigate to the desired directory.
4. Clone the repository using `git clone https://github.com/tierrun/tier-vercel-openai`.
5. Wait for the cloning process to complete.
6. Navigate into the cloned repository.
7. Rename `.env.example` to `.env.local`.
8. If there is a `package.json` file, run `npm install` to install dependencies.
9. Start the development server with `npm run dev`.

Now we can configure the services in our stack.

## Authentication

NextAuth.js comes with templates for popular authentication providers. We will provide "Log in with Google" and "Log in with Github" options. The steps below are in brief, [see here](https://next-auth.js.org/configuration/providers/oauth) for more details.

For Google:

1. Go to the Google Developer Console.
2. Create a new project or select an existing one.
3. Navigate to "Credentials" and click "Create Credentials" > "OAuth client ID".
4. Choose "Web application" as the type.
5. Enter a name and set the authorized JavaScript origins and redirect URIs.
6. Click "Create" to generate the client ID and secret.

For GitHub:

1. Go to your GitHub account settings.
2. Navigate to "Developer settings" > "OAuth Apps" > "New OAuth App".
3. Enter a name, homepage URL, and authorization callback URL.
4. Click "Register application" to generate the client ID and secret.

Note down the generated client ID and secret for both platforms and add them to the `.env` file.

## OpenAI

![Generate OpenAI keys](/images/tutorials/ai-generator-app/im1.png)

To generate API keys for OpenAI, follow these steps:

1. Go to the [OpenAI website](https://www.openai.com/) and sign in to your account. If you don't have an account, create one.
2. Once you are signed in, navigate to the OpenAI Dashboard.
3. In the dashboard, click on your username in the top-right corner and select "API Keys" from the dropdown menu.
4. On the API Keys page, click on the "New Key" button.
5. Enter a name for your API key to help you identify it later.
6. Select the appropriate access level for your API key. OpenAI offers two access levels: "Test" and "Production". For development and testing purposes, it is recommended to start with the "Test" access level.
7. Click on the "Create API Key" button to generate the key.
8. Once the key is created, you will see it listed on the API Keys page. Take note of the generated API key.

## Vercel

![Get Vercel Key](/images/tutorials/ai-generator-app/im2.png)

1. In the Vercel dashboard, create a new project or select an existing project.
2. Navigate to the "Database" section in the project settings.
3. Click on "Create Database" to create a new database.
4. Select "PostgreSQL" as the database type.
5. Choose a suitable name for your database.
6. Copy the connection details and paste them into `.env`.

## Postmark

![Get Postmark key](/images/tutorials/ai-generator-app/im3.png)

1. Sign in to your [Postmark account](https://account.postmarkapp.com/) or create a new account if you don't have one.
2. In the Postmark dashboard, navigate to the "Templates" section.
3. Click on "Create Template" to create a new email template.
4. Give your template a name and specify a subject line for the email.
5. Create a second template for sign in.
6. Get the template IDs and add them to `.env`.

## Tier

1. Go to Stripe Dashboard and under "Developers" generate a secret key (in test mode).
2. Install the [Tier CLI](https://github.com/tierrun/tier/releases).
3. In a new terminal window, run `tier connect`. This will create a link to open in a browser and authorize Tier to make changes to the Stripe account.
4. Download the JSON config of this [pricing model](https://model.tier.run/clhdvg0ab01i7kef5dy920jm6)
5. Save the file and execute `tier push path_to_filename` to push the model to Stripe.
6. Log in to the Stripe Dashboard and you will see new product plans as per the pricing model.

## Hello World!

When you've completed this set up, you should be able to launch the app locally on `https://localhost:3000` and see your app loading. Click on either of the sign-up buttons in the call to action on the page to get started.

![Your running application 1](/images/tutorials/ai-generator-app/im4.png)

![Your running application 2](/images/tutorials/ai-generator-app/im5.png)

## Adapting the template to your own needs

![Tier architecture](/images/tutorials/ai-generator-app/im6.png)

Tier provides an opinionated yet flexible way to implement pricing. It is designed to work from within your app and provide an abstraction layer on top of Stripe for anything related to pricing, billing, subscriptions, entitlements, metering, and so on.

Normally as a business grows or pivots over time, the logic required to enable all these aspects of payment processing can become quite unmanageable, burning up development hours on customer-side features. With Tier, all the elements of pricing operations are brought under one logical entity, giving you a single source of truth in `pricing.json` at any given time. When the pricing model shifts, the older customers retain access to the app based on their existing pricing plans while new customers are migrated to the new model in a way that reduces the code to handle metering, entitlements, and other aspects of subscription pricing.

For the template, this is the starting point:

```json
{
  "plans": {
    "plan:free@0": {
      "title": "Free",
      "features": {
        "feature:aicopy": {
          "mode": "volume",
          "tiers": [
            {
              "upto": 1
            }
          ],
          "title": "AI Generated Copy"
        },
        "feature:base": {
          "base": 0,
          "title": "Base"
        }
      }
    },
    "plan:startup@0": {
      "title": "Startup",
      "features": {
        "feature:aicopy": {
          "mode": "volume",
          "tiers": [
            {
              "upto": 4
            }
          ],
          "title": "AI Generated Copy"
        },
        "feature:base": {
          "base": 2000,
          "title": "Base"
        },
        "feature:extraaicopy": {
          "title": "AI Generated Extra - Copy",
          "mode": "volume",
          "tiers": [
            {
              "price": 500
            }
          ]
        }
      }
    },
    "plan:business@0": {
      "title": "Business",
      "features": {
        "feature:aicopy": {
          "mode": "volume",
          "tiers": [
            {
              "upto": 10,
              "base": 0
            }
          ],
          "title": "AI Generated Copy"
        },
        "feature:base": {
          "base": 4000,
          "title": "Base"
        },
        "feature:extraaicopy": {
          "mode": "volume",
          "tiers": [
            {
              "price": 400
            }
          ],
          "title": "AI Generated Copy - Extra"
        }
      }
    }
  }
}
```

The pricing models here include two major building blocks: Plans and features. A feature is a set of functionality that provides some tangible value to the customer, for example, the ability to generate marketing content is the feature in our app. Plans are a collection of features that define the billing frequency.

This JSON represents a pricing plan structure with different tiers and features. Let's break it down:

The top-level object has a key called `"plans"` containing multiple pricing plans as its values. Each pricing plan is identified by a key that starts with `"plan:"` followed by the plan name and a version number.

The first plan is called "Free" and has the key `"plan:free@0"`. The Free plan has two features: `"aicopy"` and `"base"`. The `"aicopy"` feature has `"mode"` set to `"volume"` and `"tiers"` with an `"upto"` value of `1`. The `"base"` feature here has a value of `0`.

The second plan is called "Startup" and has the key `"plan:startup@0"`. The Startup plan has three features: `"aicopy"`, `"base"`, and `"extraaicopy"`. The `"aicopy"` feature has `"mode"` set to `"volume"` and a single tier with an `"upto"` value of `4`. The `"base"` feature has a value of `2000`. The `"extraaicopy"` feature has a title set to `"AI Generated Extra - Copy"`, `"mode"` is set to `"volume"`, and a single tier with a `"price"` value of `500`.

The third plan is called "Business" and has the key `"plan:business@0"`. The Business plan has the same three features as the Startup plan: `"aicopy"`, `"base"`, and `"extraaicopy"`, but the features have different values. The `"aicopy"` feature has `"mode"` set to `"volume"` and a single tier with an `"upto"` value of `10` and a `"base"` value of `0`. The `"base"` feature has a `"base"` value of `4000`. The `"extraaicopy"` feature has `"mode"` set to `"volume"` and a single tier with a `"price"` value of `400`.

Overall, this JSON represents a hierarchical structure of pricing plans, with each plan having different features and tiers defining the pricing for those features. This is a fairly mature and complicated volumed-based graduated pricing system and with Tier's primitive expressive JSON it can be modeled in only a few lines, versioned for the future, and include entitlements checks at the code level.

### Customizing your plans

Here we have three plans and three features, and each plan has a set of features associated with it. Now you can mix and match the plans and features to create a set that works for your use case.

To change the JSON and create different features and plans with versions, you can follow these steps:

1. To create a new plan, add a new key-value pair to the `"plans"` object. The key should follow the `"plan:{name}@{version}"` format, where you replace `"{name}"` with the name of the plan and `"{version}"` with the version number. For example, if you want to create a plan called "Pro" with version 1, the key would be `"plan:pro@1"`.

2. Set the title of the new plan by adding a `"title"` key inside the plan object and assigning it the desired value. For example, if the new plan is called "Pro", you would add the following line inside the plan object: `"title": "Pro"`.

3. Add the features the new plan should have to the `"plan"` object by adding a `"features"` object. Each feature is represented by a key-value pair, where the key represents the feature and the value contains its properties.

4. Customize the properties for each feature. Each feature should have a unique key inside the `"features"` object. You can set properties such as `"title"`, `"mode"`, and `"tiers"` for each feature. Modify the values according to your needs.

5. Save the changes and execute `tier push path_to_filename` to push the plans to Stripe.

6. Repeat steps 1-5 for each new plan or feature you want to create. Remember to use unique keys for each plan and feature to avoid conflicts.

While adding plans and features to the `pricing.json` file, be sure to maintain the overall structure and adhere to the proper syntax of JSON.

### Migrating customers to a different plan

Imagine you change your product's pricing model and you want to migrate those customers on the Startup plan to the new Pro plan we created above. You can do this with a simple migration script:

```jsx
customers.map(customer => {
	await tier.subscribe(`org:${customer.id}`,
		features: 'plan:pro@1' // or it can be an array of feature-ids,
	);
})
```

### Feature reporting

You might have longer-standing customers on older plans to allow you to experiment with pricing without changes to the app's core business logic.

If you would like to check a customer's access to a feature, the logic is reduced to a generalized code block that does not need to change as the plan or feature details are changed.

```jsx
const access = await tier.can(
  'org:customer-id-from-your-db',
  'feature:feature-from-base-plan'
)
if (access.ok) {
  // Give access to the feature here
} else {
  // Handle restriction and upselling here.
}
```

Similarly, for your billing portal, you may like to create a feature usage report.

```jsx
await tier.report('org:customer-id-from-your-db',
	'feature:feature-id',
	 1 // This is the unit of feature consumption,
	{
		at: new Date('23 March 2023'),
		clobber: true // If you want the usage amount to override any previously reported usage of the feature for the current phase
	}
);
```

Note how different features have different models associated with them. You can handle this at a granular plan level, giving you close control over the logic of subscription and entitlement without needing to create any ad-hoc coding patterns as the application evolves.

You might want to begin charging your customers to use your app using a simple, single-tier, per-user model, for example, $10 per user per month.

This model is technically a usage-based price because it's based on how many seats are being used. However, unlike charging for disk space or requests, the counter is not reset each billing cycle.

We use `"aggregate":"perpetual"` to always charge a customer based on the most recent usage level, across all billing periods. This way, we only have to update their seat consumption when it changes.

```jsx
{
  "plans": {
    "plan:[email protected]": {
      "features": {
        "feature:seat": {
          "aggregate": "perpetual",
          "tiers": [
            { "price": 1000 }
          ]
        }
      }
    }
  }
}
```

Should you wish to add pricing models to accommodate countable actions, for example, based on the number of marketing copy documents generated, you could add flat-rate or tiered pricing options to `pricing.json`. Pricing options can then be versioned and grandfathered when plans are retired.

Flat pricing:

```jsx
{
  "plans": {
    "plan:[email protected]": {
      "features": {
        "feature:message": {
          "tiers": [
            {
              "price": 1
            }
          ]
        }
      }
    }
  }
}
```

Tiered Pricing:

```jsx
{
  "plans": {
    "plan:[email protected]": {
      "features": {
        "feature:message": {
          "tiers": [
            {
              "upto": 1000,
              "base": 1000
            },
            {
              "price": 1
            }
          ]
        }
      }
    }
  }
}
```


### Importing dependencies

At the beginning of the `Generate` component, we import the necessary dependencies: React, `useEffect`, `useState`, and the custom button component from `@/components/ui/Button`. These dependencies are essential for building the functionality and user interface of the component.

### Initializing state variables

Next, we initialize the state variables used in the `Generate` component. These state variables are crucial for managing the component's dynamic behavior and storing user input and generated suggestions. The state variables include `input`, `error`, `suggestion`, `loading`, and `usedQuota`.

### Implementing character limit validation

To ensure that the user's input doesn't exceed the character limit, we use the `useEffect` hook. This hook monitors changes in the input state variable and triggers a validation check. If the length of the input exceeds 100 characters, we set the `error` state to `true`. This enables us to display an error message and prevent the user from submitting the form.

### Saving user suggestions

The `saveSuggestion` function is responsible for saving user suggestions. It is called within the `submit` function, which we'll discuss in the next step. The `saveSuggestion` function makes a POST request to the `/api/save-suggestion` endpoint, sending the suggestion and input as JSON data in the request body. On receiving the response, we check if it's successful (`res.ok`) and update the `usedQuota` state variable accordingly. This ensures that the user's quota is updated after successfully saving a suggestion.

### Handling form submission

The `submit` function is triggered when the user clicks the "Generate marketing copy" button. Within this function, we first reset the `suggestion` state variable to an empty string. We then check the length of the input to ensure it doesn't exceed the character limit. If it does, we set the `error` state to `true`, displaying an error message to the user. Otherwise, we set the `loading` state to `true` to indicate that the copy-generation process is in progress.

We make a POST request to the `/api/generate` endpoint, sending the input and user ID (from the user prop) as JSON data in the request body. After validating the success of the response (`res.ok`), we get a `ReadableStream` containing the generated copy. We read the stream using a while loop, decoding the stream's chunks and updating the `suggestion` state with each chunk. Additionally, we concatenate the chunks into the `finishedCopy` string to save the complete suggestion later.

Finally, we call the `saveSuggestion` function, passing the `finishedCopy` and `input` as parameters. This ensures that the suggestion is saved after it has been fully generated.

### Displaying user greetings

Within the JSX markup, we display a greeting to the user. We use the user prop to access the user's name and conditionally render it within a span element. This provides a personalized greeting to enhance the user experience.

### Managing copy limits

Based on the user's quota usage, we display either the remaining copy count or an upgrade option. If the `usedQuota` is less than the user's quota limit (`user?.limit?.limit`), we display the remaining copy count as `${usedQuota}/${user?.limit.limit}` copy remaining. Otherwise, if the user has exceeded their quota, we display a message indicating the limit has been reached and offer an upgrade option. This provides transparency to the user about their copy usage and encourages them to consider upgrading for additional copies.

### Implementing input field for prompt

The input field allows the user to enter their marketing prompt. It is implemented using a `textarea` element. The value of `textarea` is bound to the `input` state variable, ensuring that it reflects the user's input. The `onChange` event handler updates the `input` state whenever the user types or modifies the input.

### Displaying character length indicator

To provide feedback to the user regarding the character count of their input, we display a character length indicator. This indicator is implemented as a `div` element with a dynamic CSS class, which changes the color based on the length of the input. The character count is displayed as `${input.length}/100` remaining. This allows the user to track the length of their input and stay within the character limit.

### Handling error messages

In case the user exceeds the character limit, we display an error message to notify them of the issue. The error message is conditionally rendered using the `error` state variable. If `error` is `true`, we display a `p` element with the text "Character limit exceeded" in red. This provides immediate feedback to the user so that they can fix the issue.

### Implementing output field for marketing copy

The output field is where the generated marketing copy is displayed to the user. It is implemented as a `div` element with a fixed height and a border. If the suggestion state variable is not empty, we render a `p` element inside the `div` with the content of the suggestion. Otherwise, we render a default message using an `h3` element. This ensures that the user is informed about where the generated marketing copy will appear and provides a placeholder message until the copy is generated.

## Change the AI prompt

Startups are a tricky business and perhaps you need to pivot into a new business model. Say you decide that, instead of targeting marketers, salespeople would be a better fit for your app.

To make the change, first open `src/components/app/GenerateSection.tsx` in the frontend and edit the React `Generate` component.

Next, open `src/app/api/generate/route.ts` in the backend and change the prompt to this:

```javascript
const prompt = You are a sales expert and a customer approaches you to write a very short and very interesting sales copy for him or her. They want a sales copy on the topic of \"${input}\".\n\nThis is the short sales copy you came up with:\n\n;
```

Since most of our revenue comes from generating sales copy, we might want to enable users to generate multiple copies so they can find the right version for them in a much simpler way. To get multiple outputs from the OpenAI API, you can modify the `generateSalesCopyStream` function as follows:

```javascript
const generateSalesCopyStream = async (input: string) => {
  const prompt = `You are a sales expert and a customer approaches you to write a very short and very interesting sales copy for him or her. They want a sales copy on the topic of \"${input}\".\n\nThis is the short sales copy you came up with:\n\n`

  const payload: OpenAIStreamPayload = {
    model: 'text-davinci-003',
    prompt,
    temperature: 0.85,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    n: 5, // Set the desired number of outputs
  }

  const stream = await OpenAIStream(payload)

  return stream
}
```

Here are some of the parameters you can adjust:

`model`: Specify the model you want to use. You can try different models to see which one performs best for your sales copy generation task.

`temperature`: Controls the randomness of the generated output. Higher values (such as our example, `0.85`) make the output more diverse, while lower values (for example, `0.2`) make it more focused and deterministic.

max_tokens`: Sets the maximum number of tokens in the generated output. You can adjust this value based on the desired length of your sales copy.

`top_p`: Controls the diversity of the generated output by using the nucleus sampling technique. Higher values (for example, `1`) deliver more diverse and varied outputs.

`frequency_penalty`: Adjusts the penalty for repeating similar phrases in the generated output. You can increase this value to reduce repetition.

`presence_penalty`: Controls the penalty for generating output unrelated to the input. Higher values (for example, `0.6`) make the output more focused on the input topic.

`n`: Specifies the number of outputs you want from the API. Set it to a value greater than 1 to get multiple outputs.

Feel free to experiment with these settings to achieve the desired results for your sales copy generation.

## Deployment with Vercel

1. Install the vercel client CLI using `npm install -g vercel` and log in using `vercel login`.
 2. Build the project using `npm run build`, which will create an optimized version of your project in the `.next` directory.
 3. Deploy using the command `vercel`. By default, Vercel assigns a subdomain to your project (for example, `https://your-project-name.vercel.app`).
 4. Log in to your Vercel account and now make all the environment variable changes as per `src/env.mjs` to make blip production ready.

While we've shown you the steps to take to turn your SaaS content generator into a fully functional, production-ready application, this is just the beginning of your SaaS journey. Now you can take your application and turn it into your own and Tier will take care of your pricing needs like entitlements, subscriptions, metering, and grandfathering plans to ensure that your SaaS application is set to evolve as your business moves and the systems of record are always configured automatically.

