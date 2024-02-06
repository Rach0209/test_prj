package test_project.user.bss.gis.ctl;

import java.util.Locale;

import javax.annotation.Resource;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.log4j.Log4j2;
import test_project.user.bss.gis.svc.GisService;

@Controller
@RequestMapping(value = "/bss/gis")
@Log4j2
public class GisController {
	private final Logger logger = LogManager.getLogger(GisController.class);
	
	@Resource(name = "gisService")
	private GisService gisService;
	
	@RequestMapping(value = "")
	public String home(Locale locale, Model model) {
		logger.info("Welcome 3DMap!! {}", locale);
		return "/bss/gis/map";
	}
	
	@RequestMapping(value = "/beta")
	public String homeBeta(Locale locale, Model model) {
		logger.info("Welcome 3DMap!! {}", locale);
		gisService.testConnetcion();
		gisService.getNow();
		return "/bss/gis/map_beta";
	}
}
