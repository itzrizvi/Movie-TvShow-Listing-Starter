const { default: slugify } = require("slugify");

const slugifyRecursive = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return;
    }
    
    if (Array.isArray(obj)) {
        obj.forEach((item) => slugifyRecursive(item));
    } else {
        Object.keys(obj).forEach((key) => {
        if (key === 'title') {
            const title = obj[key];
            const slug = slugify(title, {
                replacement: '-',
                remove: /[*+~.()'"!:@]/g,
                lower: true,
                strict: true,
                trim: true
            });
            obj.slug = slug;
        }
    
        slugifyRecursive(obj[key]);
        });
    }
}

module.exports = {
    slugifyRecursive
}