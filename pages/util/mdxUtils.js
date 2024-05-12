import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';


export async function getMDXFiles(dir) {
    // Construct the directory path
    const folderPath = path.join(process.cwd(), dir);
  
    // Read all filenames in the directory
    const filenames = fs.readdirSync(folderPath);
  
    // Array to store metadata and links of all MDX files
    const mdxFiles = [];
  
    // Iterate through each filename
    filenames.forEach((filename) => {
      // Construct the full path of the file
      const filePath = path.join(folderPath, filename);
  
      // Read the content of the file synchronously
      const fileContent = fs.readFileSync(filePath, 'utf8');
  
      // Parse frontmatter and content using gray-matter
      const { data } = matter(fileContent);
  
      // Extract the frontmatter and link
      const frontmatter = data; // Assuming frontmatter is directly the data object
      const link = `/${dir}/${filename.replace(/\.mdx?$/, '')}`; // Assuming the link structure is based on filename
  
      // Push metadata and link to the array
      mdxFiles.push({ frontmatter, link });
    });
  
    return mdxFiles;
  }