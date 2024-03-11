import React from 'react'
import './main.css';
import Med from '../../assets/MEd.jpg'


const Blog = () => {

  const ProperBlogPostContent = [
    {
      id: 1,
      title: 'Generative AI in Medicine',
      image: Med,
      subtitle: `Exploring the Nexus of Medicine and Artificial Intelligence: Your Gateway to Cutting-Edge Insights in Healthcare Innovation',
      Content: "If you are working through fertility issues, you've probably learned that you can't share your experience with everyone. No doubt, someone will say something that dismisses your feelings or outright offends you.`,
      Content: `The holiday season can be especially hard to navigate, with friends and family asking tons of invasive questions. Even when they are well-meaning, it can be gutting to be asked again and again at the family holiday party when you’re going to give mom a grandbaby. Many people simply don't understand what it's like to go through challenges trying to conceive.
      
      The key is to resist the urge to fire back. You don't need added stress of trying to navigate insensitive comments. Dealing with negativity gracefully—or not at all—can help you skip the fuming phase and get back to your day.
      
      Five Common Insensitive Comments
      Below are five of the most common insensitive comments and positive suggestions for how to deal with them.
      
      "Maybe it's not meant to be."
      This comment is painful on multiple levels. First of all, it assumes defeat, like you will never conceive. It also removes all of the power from your hands—at a time when you may already feel like you are not in control.
      
      The first thing to remember is that the person who is saying this isn't thinking about the deeper implications. They probably have no idea what to say. And instead of just keeping quiet, people grasp at clichés—not helpful. Some people have even heard this from their own doctors.
      
      The best way to respond is not to. Silence can send the message that the comment was inappropriate. Then, make a note to yourself that you should avoid the topic with this person going forward.
      
      "Fertility issues? I could just look at my husband and get pregnant."
      This kind of "it's easy for me" comment is annoying and belittling. How you respond depends on how close you are to the person.
      
      If it is someone close to you, like a sister or best friend, you may want to address it directly. Calmly explain that you'd rather they try to understand your experience, rather than compare it to their own.
      
      "Whose fault is it?" or "What's wrong with you?"
      Let's assume that this person is genuinely asking about the cause of the fertility issues, not acting like you have a contagious virus. These are deeply personal—not to mention poorly phrased—questions, whether or not the person asking knows it.
      
      If you even know the cause, you have to be cautious about what you share. Answering this question honestly may mean revealing more than you or your partner is comfortable with.
      
      If you don't want to go into detail, then say something like, "The reasons are personal, but we're working through them."
      
      "How are you paying for all that?"
      No one would ask how you managed to pay for a new car or your new home. And if you disclose too much about the out-of-pocket costs of fertility treatment, you may open yourself up to judgment, depending on who's asking.
      
      If it's coming from someone else dealing with fertility issues, you may feel more comfortable sharing your advice. Or if it's coming from someone who wants to make sure you're OK financially, that may be fine, too.
      
      But if it's someone just being nosy or wondering if you've got a hidden stash, feel free to brush this comment off: "We're handling the costs just fine." Next subject.
      
      "Why don't you just adopt? There are a lot of kids out there."
      The underlying social commentary here can be really hard to take.
      
      While the person may be trying to offer a solution, this comment implies that something's wrong with wanting to experience pregnancy and give birth to your own child, or that adopting an infant will be easier.
      
      It also implies that you should give up trying to conceive. This might be the hardest comment to respond to because just about anything you say could continue the conversation.
      
      If you choose to address this question, here's the truth: You and your partner owe it to yourselves to try until you feel at peace about moving on to the next possibility. That may mean adoption. It may mean trying another fertility treatment. The best way to address this comment but end the conversation is to be direct: "We know that adoption is an alternative, but we're not ready to give up trying to conceive."`,
      views: '299.5k views',
      enum: [
        'medicine', 'healthcare', 'feminine health'
      ],
      other_images: [
        {
          id: 1,
          image_1: '',
          image_2: '',
          image_3: '',
          image_4: ''
        },
      ]
    }
  ]
  return (
    <>
        {ProperBlogPostContent.map((cont) => (
          <div className='page' key={cont.id}>
            <div className='blog-post-container max-w-6xl mx-auto'>
              <div className='blog-post'>
                <div className='blog-post-image'>
                <h1 className='blog-post-title'>{cont.title}</h1>
                  <img src={cont.image} alt={cont.title} />
                </div>
                <div className='blog-post-content'>
                  <div className='blog-post-subtitle'>{cont.subtitle}</div>
                  <div className='blog-post-views'>{cont.views}</div>
                  <hr />
                  <div className='content-blog'>
                  <div className='blog-post-content-text'>{cont.Content}</div>
                    {cont.other_images.map((img) => (
                      <img src={img.image_1} id={img.id} alt={`${img.ig}.jpg`} className='img-fluid' />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default Blog