import fs from 'fs'
import path from 'path'

// export default async function MyPage(req, res ) {
//   const mdxFiles = await getMDXFiles('./news');

//   // Now mdxFiles contains the frontmatter and links of all MDX files in the specified folder
//   console.log(mdxFiles);

//   res.json(mdxFiles)
//   // Render your component or page
// }

export default (req, res) => {
  const dirRelativeToPagesFolder = 'news'

  const dir = path.resolve('./pages', dirRelativeToPagesFolder);

  const filenames = fs.readdirSync(dir);

  // Array to store contents of all files
  const fileContents = [];

  // Iterate through each filename
  filenames.forEach(filename => {
      // Construct the full path of the file
      const filePath = path.join(dir, filename);

      // Read the content of the file synchronously
      const content = fs.readFileSync(filePath, 'utf8');

      // Push the content to the array
      fileContents.push((dirRelativeToPagesFolder+"/"+filename).concat(content.toString().split('---')[1]));
  });

  // const file = filenames.map(name => path.join('/', dirRelativeToPagesFolder, name) )

  const metadata = fileContents.map(data => data)

  res.statusCode = 200
  // res.json(file)
  res.json(metadata);
}