import { Slug } from './slug';


test('it should be able to create a new sluf from text',  () => {
    const slug = Slug.createFromText('Example question title')

    expect(slug.value).toEqual('example-question-title')
})