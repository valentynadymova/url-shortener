import urlExist from 'url-exist';

const validateUrl = async (req, res, next) => {
    const { orgUrl } = req.body;
    const isExist = await urlExist(orgUrl);
    if (!isExist) {
      return res.json({ message: "Invalid URL", type: "failure" });
    }
    next();
  };
  
  export default validateUrl;