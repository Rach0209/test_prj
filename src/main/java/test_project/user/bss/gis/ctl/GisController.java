package test_project.user.bss.gis.ctl;

import java.util.Locale;

import javax.annotation.Resource;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import test_project.user.bss.gis.svc.GisService;

@Controller
@RequestMapping(value = "/bss/gis")
public class GisController {
	private final Logger logger = LogManager.getLogger(GisController.class);
	
	@Resource(name = "gisService")
	private GisService gisService;
	
	@RequestMapping(value = "")
	public String home(Locale locale, Model model) {
		logger.info("Welcome 3DMap!! {}", locale);
		logger.info(gisService.testConnetcion());
		return "/bss/gis/map";
	}
	
	@RequestMapping(value = "/beta")
	public String homeBeta(Locale locale, Model model) {
		logger.info("Welcome 3DMap!! {}", locale);
//		logger.info(gisService.testConnetcion());
		return "/bss/gis/map_beta";
	}
}
